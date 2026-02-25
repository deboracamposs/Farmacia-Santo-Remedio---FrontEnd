/* eslint-disable prefer-const */
import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-blue-800 text-white">
                <div className="container flex flex-col items-center py-4">
                    <p className="text-xl font-bold">
                        Farmácia Santo Remédio | © {data} Débora Campos
                        </p>
                    <p className="text-lg">Acesse nossas redes sociais</p>
                    <div className="flex gap-2">
                        <a href="https://github.com/deboracamposs" target="_blank">
                            <GithubLogoIcon size={40} weight="bold"/>
                        </a>
                        <a href="https://www.instagram.com/deboracampozz/" target="_blank">
                        <InstagramLogoIcon size={40} weight="bold"/>
                        </a>
                        <a href="https://www.linkedin.com/in/debora-campos-/" target="_blank">
                        <LinkedinLogoIcon size={40} weight="bold"/>
                        </a>
                        
                </div>
            </div>
        </div>
    </>
    )
}

export default Footer;
   