// export  async function getServerSideProps(param) {
//     console.log(param)
//     let data=await fetch(`http://localhost:3000/api/products?category=${param}`)
//     let data_next=await data.json()
//     return {
//       props: {pro_data:data_next}, // will be passed to the page component as props
//     }
//   }

  export  async function Single_getServerSideProps(param) {
    console.log(param)
    if(param){

        let data=await fetch(`http://localhost:3000/api/products?_id=${param}`)
        let data_next=await data.json()
        return {
            props: {pro_data:data_next}, // will be passed to the page component as props
        }
    }
  }