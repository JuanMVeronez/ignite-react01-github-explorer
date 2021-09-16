import { useState, useEffect } from "react";

import '../styles/repositories.scss'

import { RepositoryItem } from "./RepositoryItem";
import { Repository } from "./Repository";

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
      // depois de retornar a api transforma o retorno em json
      .then(res => res.json()) 
      // depois que tiver o formato json muda o state dos repos
      .then(repos => setRepositories(repos)) 
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      
      <ul>
        {
          repositories.map((repo) => (
            <RepositoryItem key={repo.id} repository={repo}/>
          ))
        }
      </ul>
    </section>
  )
}