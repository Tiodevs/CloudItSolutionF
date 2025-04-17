import Image from 'next/image';
import styles from './styles.module.scss';

export function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/5511999999999" // Substitua pelo número correto do WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappButton}
    >
      <Image
        alt="WhatsApp Contato"
        src={"/whatsicon.png"}
        width={60}
        height={60}
        priority={true}
        quality={100}
      />
    </a>
  );
} 