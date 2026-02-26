import { useEffect, useState } from "react";
import { buscar } from "../../services/Service";
import type Categoria from "../../models/Categoria";
import CardCategoria from "../../components/categoria/cardcategoria/CardCategoria";

// Importações do Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Importações de Estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Home() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias);
    } catch {
      console.log("Erro ao carregar categorias");
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, []);

  return (
    <>
      <div className="bg-blue-900 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Farmácia Santo Remédio</h2>
            <p className="text-xl">
              Porque milagre a gente tenta, mas o genérico é garantido.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="https://ik.imagekit.io/ycn9hqmaw/Pharmacist-amico.png"
              alt="Imagem Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>

      
      <div className="bg-white py-10">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10 text-slate-800">
            Categorias em Destaque
          </h2>

          <Swiper
            spaceBetween={30}
            slidesPerView={1} 
            breakpoints={{
              640: { slidesPerView: 2 }, 
              1024: { slidesPerView: 3 }, 
            }}
            autoplay={{
              delay: 1700,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper p-8"
          >
            {categorias.map((categoria) => (
              <SwiperSlide key={categoria.id}>
                <div className="p-2">
                   <CardCategoria categoria={categoria} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Home;