import { Repository } from "./Repository"

type RepositoryItemProps 
= {
  repository: Repository;
}

export function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name ?? 'Default'}</strong>
      <p>props.repository.description</p>
      
      <a href={props.repository.html_url} target="_blank">
        Acessar repositório
      </a>
    </li>
  )
}