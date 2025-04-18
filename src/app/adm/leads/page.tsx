'use client'

import { useEffect, useState } from "react";
import { handleLeads } from "../../actions/serverActions";
import Link from "next/link";
import styles from "./page.module.scss";

// Definindo a interface para o tipo Lead
interface Lead {
  id: string;
  nome: string;
  email: string;
  numero: string;
  createdAt: string;
}

export default function LeadsAdmin() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadLeads();
  }, []);

  async function loadLeads() {
    try {
      setIsLoading(true);
      const response = await handleLeads();
      
      if (Array.isArray(response.leads)) {
        setLeads(response.leads);
      } else {
        console.error("Resposta não é um array:", response);
        setLeads([]);
      }
    } catch (error) {
      console.error("Erro ao carregar os leads:", error);
      setLeads([]);
    } finally {
      setIsLoading(false);
    }
  }

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
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>Gerenciador de Leads</h1>
            <p>Visualize todos os leads capturados pelo site</p>
            <div>
              <Link href="/" className={styles.btn}>Ir ao site</Link>
            </div>
          </div>

          {leads.length > 0 ? (
            <div className={styles.leadTable}>
              <table>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Telefone</th>
                    <th>Data</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id}>
                      <td>{lead.nome}</td>
                      <td>{lead.email}</td>
                      <td>{lead.numero}</td>
                      <td>
                        {new Date(lead.createdAt).toLocaleDateString()} às {new Date(lead.createdAt).toLocaleTimeString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className={styles.emptyState}>
              <h3>Nenhum lead encontrado</h3>
              <p>Quando os visitantes preencherem o formulário do site, os leads aparecerão aqui.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 