interface ContainerProps {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}

// eslint-disable-next-line no-undef
const Container: React.FC<ContainerProps> = ({
  children
}) => {
  return (
    <div className='mx-auto max-w-7xl'>
      {children}
    </div>
  )
}

export default Container
