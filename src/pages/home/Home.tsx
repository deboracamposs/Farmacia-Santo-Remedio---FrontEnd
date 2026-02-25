function Home() {
  return (
    <>
        <div className="bg-blue-900 flex justify-center">
            <div className="container grid grid-cols-2 text-white">
                <div className="flex flex-col gap-4 items-center justify-center py-4">   
                    <h2 className="text-5xl font-bold">
                        Farmácia Santo Remédio 💊
                    </h2>
                    <p className="text-xl">
                        Porque milagre a gente tenta, mas o genérico é garantido.</p>    
                   </div>

                <div className="flex justify-center">
                <img
                    src='https://ik.imagekit.io/ycn9hqmaw/Pharmacist-amico.png'
                    alt='Imagem Página Home'
                    className="w-1/2"/>
                </div>
            </div>
        </div>
    </>
  )
}        

export default Home;
