import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'

const repositories = [
  {
    name: 'ScheduleIt',
    description: 'A personal schedule',
    link: 'https://github.com/JuanMVeronez/ScheduleIt'
  },
  {
    name: 'Podcastr',
    description: 'A podcast compilator website',
    link: 'https://github.com/JuanMVeronez/Podcastr'
  },
  {
    name: 'usingTypeORM',
    description: 'A basic back-end project using TypeORM',
    link: 'https://github.com/JuanMVeronez/usingTypeORM'
  },


]

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      
      <ul>
        <RepositoryItem repository={repositories[0]}/>
        <RepositoryItem repository={repositories[1]}/>
        <RepositoryItem repository={repositories[2]}/>
      </ul>
    </section>
  )
}