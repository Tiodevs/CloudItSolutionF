'use client'

import styles from "./page.module.scss";
import { Header } from "./components/header";
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

import Image from 'next/image'

export default function Home() {

    const router = useRouter();

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
                <div className={styles.header}>
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        Cloud IT Solutions: Sua Parceira em Transformação Digital
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        A Cloud IT Solutions é uma provedora de soluções de Tecnologia da Informação, especializada em consultoria SAP e serviços relacionados à transformação digital.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                    >
                        <a href="#service" className={styles.btnheade}>Saiba mais</a>
                        <a href="/contact">Entre em contato</a>
                    </motion.div>

                </div>

                <motion.div
                    id="service"
                    className={styles.services}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        },
                        hidden: {}
                    }}
                >
                    <motion.div
                        className={styles.cardservices}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 50 }
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            alt="iconservice1"
                            src={"/iconservice1.png"}
                            width={39}
                            height={39}
                            priority={true}
                            quality={100}
                        />
                        <h2>Implantação de Sistemas SAP</h2>
                        <p>Implantação dos módulos SAP (SAP ERP, SAP S/4HANA, S/4HANA Cloud Public Edition e S/4HANA Cloud Private Edition) de acordo com a necessidade específica de cada cliente.</p>
                    </motion.div>
                    <motion.div
                        className={styles.cardservices}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 50 }
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            alt="iconservice1"
                            src={"/iconservice2.png"}
                            width={39}
                            height={39}
                            priority={true}
                            quality={100}
                        />
                        <h2>Consultoria em Melhoria de Processos</h2>
                        <p>Avaliação e redesenho de processos de negócio com o objetivo de aumentar a eficiência e reduzir custos dos nossos clientes.</p>
                    </motion.div>
                    <motion.div
                        className={styles.cardservices}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 50 }
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            alt="iconservice1"
                            src={"/iconservice3.png"}
                            width={39}
                            height={39}
                            priority={true}
                            quality={100}
                        />
                        <h2>Migração para soluções em Nuvem</h2>
                        <p>Auxílio na migração de sistemas SAP para soluções em nuvem, como SAP S/4HANA Cloud, visando uma maior flexibilidade e escalabilidade de nossos clientes.</p>
                    </motion.div>
                    <motion.div
                        className={styles.cardservices}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 50 }
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            alt="iconservice1"
                            src={"/iconservice4.png"}
                            width={39}
                            height={39}
                            priority={true}
                            quality={100}
                        />
                        <h2>Otimização de Licenças</h2>
                        <p>Consultoria sobre o uso eficiente das licenças SAP e sobre a escolha de soluções que melhor atendam às necessidades da empresa.</p>
                    </motion.div>
                    <motion.div
                        className={styles.cardservices}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 50 }
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            alt="iconservice1"
                            src={"/iconservice5.png"}
                            width={39}
                            height={39}
                            priority={true}
                            quality={100}
                        />
                        <h2>Treinamento e Capacitação</h2>
                        <p>Oferecemos treinamentos para equipes internas sobre o uso do sistema SAP e suas funcionalidades.</p>
                    </motion.div>
                    <motion.div
                        className={styles.cardservices}
                        variants={{
                            visible: { opacity: 1, y: 0 },
                            hidden: { opacity: 0, y: 50 }
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image
                            alt="iconservice1"
                            src={"/iconservice6.png"}
                            width={39}
                            height={39}
                            priority={true}
                            quality={100}
                        />
                        <h2>Serviço de Advisory</h2>
                        <p>Suporte especializado que ajuda as empresas a maximizar o valor das soluções SAP que utilizam, garantindo que essas tecnologias estejam alinhadas aos objetivos de negócios da organização.</p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className={styles.cta}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h1
                        className={styles.ctatitle}
                        initial={{ x: -50 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        O que você está esperando <span>para sua tranformação?</span>
                    </motion.h1>
                    <motion.div
                        initial={{ x: 50 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <p>Descubra como a Cloud IT Solutions pode transformar seu negócio—entre em contato e dê o primeiro passo rumo à inovação!</p>
                        <div className={styles.ctabtn}>
                            <a href="/contact" className={styles.btnctamain}>Entrar em contato</a>
                            <a href="#sobre">Saber mais</a>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    id="sobre"
                    className={styles.sobre}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            alt="Logo Sujeito Pizza"
                            src={"/capasobrenos.png"}
                            width={652}
                            height={551}
                            priority={true}
                            quality={100}
                        />
                    </motion.div>
                    <motion.div
                        className={styles.sobretext}
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h2>Sobre Nós</h2>
                        <p>Na Cloud IT Solutions, somos movidos pela paixão por tecnologia e pela missão de transformar empresas através da inovação. Acreditamos que soluções inteligentes são a chave para o crescimento sustentável e o sucesso em um mundo cada vez mais digital.
                            <br /><br />
                            Somos uma provedora especializada em soluções de Tecnologia da Informação, com foco em consultoria SAP e serviços voltados à transformação digital. Com uma equipe altamente qualificada e em constante atualização, oferecemos suporte completo — desde a análise de negócios até a implementação e o acompanhamento contínuo — garantindo que nossos clientes estejam sempre à frente no cenário competitivo.
                            <br /><br />
                            Trabalhamos lado a lado com nossos parceiros para entender seus desafios, otimizar processos e desenvolver soluções personalizadas que gerem impacto real. Na Cloud IT Solutions, não entregamos apenas tecnologia: entregamos valor, estratégia e inovação sob medida para cada negócio.</p>
                    </motion.div>
                </motion.div>

                <motion.div
                    className={styles.empresas}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.h2
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Empresas que confiaram em nós
                    </motion.h2>
                    <motion.div
                        className={styles.empresaslogos}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.15
                                }
                            },
                            hidden: {}
                        }}
                    >
                        <motion.div
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 20 }
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <Image
                                alt="Logo Sujeito Pizza"
                                src={"/logoempresas1.png"}
                                width={225}
                                height={225}
                                priority={true}
                                quality={100}
                            />
                        </motion.div>
                        <motion.div
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 20 }
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <Image
                                alt="Logo Sujeito Pizza"
                                src={"/logoempresas2.png"}
                                width={192}
                                height={143}
                                priority={true}
                                quality={100}
                            />
                        </motion.div>
                        <motion.div
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 20 }
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <Image
                                alt="Logo Sujeito Pizza"
                                src={"/logoempresas3.png"}
                                width={317}
                                height={154}
                                priority={true}
                                quality={100}
                            />
                        </motion.div>
                        <motion.div
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 20 }
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <Image
                                alt="Logo Sujeito Pizza"
                                src={"/logoempresas4.png"}
                                width={165}
                                height={134}
                                priority={true}
                                quality={100}
                            />
                        </motion.div>
                        <motion.div
                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 20 }
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            <Image
                                alt="Logo Sujeito Pizza"
                                src={"/logoempresas5.png"}
                                width={213}
                                height={104}
                                priority={true}
                                quality={100}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>


                <motion.div
                    className={styles.fundadores}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div
                        className={styles.fundadorestext}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h2>Nossos Fundadores</h2>
                        <p>Liderança que inspira inovação</p>
                    </motion.div>

                    <motion.div
                        className={styles.fundadorescard}
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.person}>
                            <Image
                                alt="Logo Sujeito Pizza"
                                src={"/fundador1.png"}
                                width={226}
                                height={226}
                                priority={true}
                                quality={100}
                            />
                            <h3>
                                Christopher Magalhães
                            </h3>
                            <p>
                                CEO
                            </p>
                        </div>

                        <p className={styles.fundadoresdescricao}>
                            Com uma trajetória sólida no universo da tecnologia e mais de 12 anos de atuação em projetos SAP de alta complexidade, Christopher Magalhães é o fundador e líder estratégico da empresa. Desde o início de sua carreira, sempre esteve à frente da transformação digital de empresas de diferentes segmentos, atuando como uma ponte entre os desafios operacionais e as soluções inteligentes que a tecnologia pode oferecer.
                            <br /><br />

                            Sua missão como CEO vai além de entregar resultados — ele busca construir parcerias duradouras com seus clientes, propondo soluções que realmente agregam valor ao negócio. Seu estilo de liderança é pautado na escuta ativa, na agilidade e na criação de ambientes colaborativos, onde inovação e eficiência caminham lado a lado.
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.fundadorescard}
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.person}>
                            <Image
                                alt="Logo Sujeito Pizza"
                                src={"/fundador2.png"}
                                width={226}
                                height={226}
                                priority={true}
                                quality={100}
                            />
                            <h3>
                                Ananda Lemos
                            </h3>
                            <p>
                                CFO
                            </p>
                        </div>

                        <p className={styles.fundadoresdescricao}>
                            Ananda Lemos traz uma combinação rara de visão analítica e sensibilidade humana para o comando financeiro da empresa. Com uma carreira marcada pela excelência em planejamento estratégico, gestão de custos e construção de processos sustentáveis, ela é responsável por garantir a saúde financeira e o crescimento inteligente da organização.
                            <br /> <br />
                            Formada em Economia com especializações em Finanças Corporativas e Governança, Ananda atua de forma transversal, conectando os números à estratégia geral da empresa. Ela acredita que as finanças não devem ser apenas um indicador de desempenho, mas sim um motor de inovação e tomada de decisão consciente.
                        </p>
                    </motion.div>
                </motion.div>

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

            </main >
        </div>
    );
}
