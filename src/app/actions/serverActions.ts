"use server";

import { api } from "../services/api";

export async function handleBlogs() {
  
    try {
      const response = await api.get("/blog");
  
      console.log("Blogs achados", response.data)
      const blog = response.data
  
      return { blog }
  
  
    } catch (err: any) {
      console.log("Erro ::::", err.data)
      throw new Error(err.message);
    }
  }

// Função para lidar com o envio do formulário
export async function handleLead(data: { nome: string; email: string; numero: string }) {
  try {
    // Envia os dados para a API de lead
    const response = await api.post("/lead", data);

    console.log("Lead enviado com sucesso", response.data);
    return response.data;  // Retorna a resposta da API
  } catch (err: any) {
    console.error("Erro ao enviar o lead:", err);
    throw new Error(err.message);
  }
}

// Função para deletar um blog
export async function deleteBlog(blogId: string) {
  try {
    const response = await api.delete("/blog", {
      data: { blogId }
    });

    console.log("Blog deletado com sucesso", response.data);
    return response.data;
  } catch (err: any) {
    console.error("Erro ao deletar o blog:", err);
    throw new Error(err.message);
  }
}

// Função para buscar um blog específico pelo ID
export async function getBlogById(blogId: string) {
  try {
    const response = await handleBlogs();

    console.log("Blogs achados", response.blog)
    console.log("Blog ID", blogId)
    
    if (!response.blog || !Array.isArray(response.blog)) {
      throw new Error("Falha ao buscar blogs");
    }


    
    const blog = response.blog.find((b: any) => b.id === blogId);
    
    if (!blog) {
      throw new Error("Blog não encontrado");
    }
    
    return blog;
  } catch (err: any) {
    console.error("Erro ao buscar o blog:", err);
    throw new Error(err.message);
  }
}

// Função para atualizar um blog
export async function updateBlog(data: { id: string, titulo: string, texto: string, Banner: string }) {
  try {
    console.log("Dados que serão enviados para atualizar blog:", {
      id: data.id,
      titulo: data.titulo,
      texto: data.texto, 
      Banner: data.Banner,
      comprimentoTitulo: data.titulo?.length,
      comprimentoTexto: data.texto?.length,
      comprimentoBanner: data.Banner?.length
    });
    
    const response = await api.put("/blog", data);

    console.log("Blog atualizado com sucesso", response.data);
    return response.data;
  } catch (err: any) {
    console.error("Erro ao atualizar o blog:", err);
    // Adicionar mais detalhes sobre o erro para facilitar o debug
    if (err.response) {
      console.error("Detalhes do erro:", {
        data: err.response.data,
        status: err.response.status,
        headers: err.response.headers
      });
    } else if (err.request) {
      console.error("Erro na requisição (sem resposta):", err.request);
    }
    throw new Error(err.message || "Erro desconhecido ao atualizar o blog");
  }
}

// Função para criar um novo blog
export async function createBlog(data: { titulo: string, texto: string, Banner?: string }) {
  try {
    // Garantindo que Banner tenha um valor padrão se não for fornecido
    const blogData = {
      titulo: data.titulo,
      texto: data.texto,
      Banner: data.Banner || "Sem link"
    };
    
    console.log("Dados que serão enviados para criar blog:", {
      titulo: blogData.titulo,
      texto: blogData.texto, 
      Banner: blogData.Banner,
      comprimentoTitulo: blogData.titulo?.length,
      comprimentoTexto: blogData.texto?.length,
      comprimentoBanner: blogData.Banner?.length
    });
    
    const response = await api.post("/blog", blogData);

    console.log("Blog criado com sucesso", response.data);
    return response.data;
  } catch (err: any) {
    console.error("Erro ao criar o blog:", err);
    // Adicionar mais detalhes sobre o erro para facilitar o debug
    if (err.response) {
      console.error("Detalhes do erro:", {
        data: err.response.data,
        status: err.response.status,
        headers: err.response.headers
      });
    } else if (err.request) {
      console.error("Erro na requisição (sem resposta):", err.request);
    }
    throw new Error(err.message || "Erro desconhecido ao criar o blog");
  }
}