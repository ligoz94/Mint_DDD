import NavBar from '../organisms/Navbar/Navbar'

interface Props {
  children: React.ReactElement
}

const DefaultTemplate: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="default_template">
      <div className="default_template__navbar">
        <NavBar />
      </div>
      <div className="default_template__content">{children}</div>
    </div>
  )
}

export default DefaultTemplate
