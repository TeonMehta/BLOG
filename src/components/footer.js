import React from "react"
import { Link } from "gatsby"
// import ConvertKitForm from 'convertkit-react'
// const MY_FORM_ID = 1557802
// const config = {
//   formId: MY_FORM_ID,
//   template: 'pine',
//   emailPlaceholder: 'Your email address',
// }

const Footer = () => {
  return (
    <div>
      <footer>
        <br />
        <Link to={"/"} className={"back"}>
          &#8592; Back
        </Link>
        {/*<ConvertKitForm {...config} />*/}
      </footer>
    </div>
  )
}

export default Footer
