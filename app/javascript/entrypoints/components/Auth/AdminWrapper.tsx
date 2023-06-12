import React, { FC, useState } from 'react'
type Props = {}

const AdminWrapper = (Component: FC<any>) => (props: Props) => {
  const [toggleNav, setToggleNav] = useState<boolean>(false)
  const navToggleHandler = () => {
    setToggleNav(prev => !prev);
  }
  return (
    <div>
      <Component {...props} toggler={toggleNav} />
    </div>
  )
}

export default AdminWrapper;