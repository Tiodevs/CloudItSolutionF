'use client'

import styles from "./page.module.scss";
import { Header } from "../components/header";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { handleBlogs } from "../actions/serverActions";
import { motion } from 'framer-motion';

export default function Home() {
  // Altere o valor inicial de blogs para um array vazio
  const [blogs, setBlogs] = useState<any[]>([]);

  // Estado para controlar o carregamento dos blogs
  const [isLoading, setIsLoading] = useState(true);

  // USEEFFECTS
  useEffect(() => {
    async function getBlogs() {
      try {
        const responseBlogs = await handleBlogs();
        console.log("Blogs recebidos:", responseBlogs.blog);

        // Verifique se a resposta é um array antes de definir no estado
        if (Array.isArray(responseBlogs.blog)) {
          setBlogs(responseBlogs.blog);
        } else {
          console.error("Resposta não é um array:", responseBlogs);
          setBlogs([]);  // Se a resposta não for um array, definir como um array vazio
        }
      } catch (error) {
        console.error("Erro ao carregar os blogs:", error);
        setBlogs([]);  // Caso de erro, garantir que blogs seja um array vazio
      } finally {
        setIsLoading(false); // Após a obtenção dos dados, remove o carregamento
      }
    }

    getBlogs();
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
      </div>
    );
  }

  return (
    <div>
      <main className={styles.main}>
        <Header />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            alt="Logo Sujeito Pizza"
            src={"/capahome.png"}
            className={styles.capa}
            width={1920}
            height={670}
            priority={true}
            quality={100}
          />
        </motion.div>

        <motion.div 
          className={styles.headerline}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.h1
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Nossos blogs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Fique sempre atualizado através do nosso blog
          </motion.p>
        </motion.div>

        {/* Exibição do spinner enquanto os blogs estão sendo carregados */}
        {isLoading ? (
          <div className={styles.spinner}>
            <img src="/spinner.gif" alt="Carregando..." /> {/* Imagem de spinner */}
          </div>
        ) : (
          <motion.div 
            className={styles.posts}
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              },
              hidden: {}
            }}
          >
            {/* Renderiza os blogs usando map */}
            {blogs.length > 0 ? (
              blogs.map((blog) => {
                // Limita o texto para os primeiros 100 caracteres
                const limitedText = blog.texto.substring(0, 100);

                // Substitui as quebras de linha (\n) por <br /> para que o HTML seja interpretado
                const textWithLineBreaks = limitedText.replace(/\n/g, '<br />');

                return (
                  <motion.a 
                    href={"/blog/" + blog.id} 
                    key={blog.id}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 50 }
                    }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={styles.post}>
                      <h2>{blog.titulo}</h2>
                      <p className={styles.postdate}>
                        {new Date(blog.createdAt).toLocaleDateString()} | {new Date(blog.createdAt).toLocaleTimeString()}
                      </p>
                      {/* Utilizando dangerouslySetInnerHTML para renderizar o texto com quebras de linha */}
                      <p dangerouslySetInnerHTML={{ __html: textWithLineBreaks }}></p>
                      <a href={"/blog/" + blog.id} className={styles.readMore}>Ler mais</a> {/* Link para ler mais */}
                    </div>
                  </motion.a>
                );
              })
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Não há blogs para exibir no momento.
              </motion.p>
            )}
          </motion.div>
        )}

        <motion.div 
          className={styles.cta2}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h1 
            className={styles.ctatitle}
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Você está preparado para o <span>próximo passo?</span>
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>Descubra como a Cloud IT Solutions pode transformar seu negócio—entre em contato e dê o primeiro passo rumo à inovação!</p>
            <div className={styles.ctabtn}>
              <a href="/contact" className={styles.btnctamain}>Começe agora</a>
            </div>
          </motion.div>
        </motion.div>

        <motion.footer 
          className={styles.footer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className={styles.footercontent}>
            <motion.h3
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Contato
            </motion.h3>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Estamos prontos para ajudar seu negócio a alcançar novas alturas! Entre em contato com a Cloud IT Solutions hoje mesmo e saiba como nossas soluções personalizadas podem atender às suas necessidades. Sua jornada rumo à inovação começa aqui!
            </motion.p>
            <motion.div 
              className={styles.footerlinks}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                },
                hidden: {}
              }}
            >
              <motion.a 
                href="mailto:comercial@cloudconsulting.com.br"
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 10 }
                }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  alt="Logo Sujeito Pizza"
                  src={"/iconemail.png"}
                  width={24}
                  height={24}
                  priority={true}
                  quality={100}
                />
                comercial@cloudconsulting.com.br
              </motion.a>
              <motion.a 
                href="https://www.instagram.com/sapeia_/"
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 10 }
                }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  alt="Logo Sujeito Pizza"
                  src={"/iconinstagram.png"}
                  width={24}
                  height={24}
                  priority={true}
                  quality={100}
                />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/company/cloud-itsolutions/"
                variants={{
                  visible: { opacity: 1, y: 0 },
                  hidden: { opacity: 0, y: 10 }
                }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  alt="Logo Sujeito Pizza"
                  src={"/linkedin.png"}
                  width={24}
                  height={24}
                  priority={true}
                  quality={100}
                />
              </motion.a>
            </motion.div>
          </div>
        </motion.footer>
      </main>
    </div>
  );
}
