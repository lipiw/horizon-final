import Image from 'next/image';
import QR from '../assets/qr-code.png';

export function PhoneSection() {
  return (
    <section className="mx-auto max-w-4xl sm:py-20 lg:py-20 snap-none">
      <div className="text-center flex items-center flex-col">
        <h4 className="text-4xl select-none cursor-default font-bold tracking-tight text-gray-900">
          Junte-se a nós e mergulhe em um mundo de eventos incríveis dos seus artistas favoritos. Faça o download agora
          e nunca perca um show!
        </h4>
        <div className="mt-16 ">
          <Image className="h-44 w-44" src={QR} alt="QR CODE" />
        </div>
      </div>
    </section>
  );
}
