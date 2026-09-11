import StackPanel from './StackPanel'
import TechnologyCard from './TechnologyCard'
import type { Technology } from './TechnologyCard'

type Props = {
  technologies: Technology[]
  selected: Technology[]
  onAdd: (technology: Technology) => void
  onRemove: (id: string) => void
  onRemoveAll: () => void
}

export default function Technologies({
  technologies,
  selected,
  onAdd,
  onRemove,
  onRemoveAll,
}: Props) {
  return (
    <section className="technologies-section" id="technologies">
      <div className="container">
        <div className="section-heading">
          <h2>
            Explore the <span className="gradient-inline">Technologies</span>
          </h2>
          <p>Pick useful technologies and build a stack that matches your project.</p>
        </div>

        <div className="technology-layout">
          <div className="technology-grid">
            {technologies.map((technology) => {
              const isAdded = selected.some((item) => item.id === technology.id)

              return (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isAdded={isAdded}
                  onAdd={onAdd}
                />
              )
            })}
          </div>

          <StackPanel
            selected={selected}
            onRemove={onRemove}
            onRemoveAll={onRemoveAll}
          />
        </div>
      </div>
    </section>
  )
}
