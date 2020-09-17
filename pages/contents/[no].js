import { useRouter } from 'next/router'

const data = [
  { no: '1', name: 'Github' },
  { no: '2', name: 'Apple' },
  { no: '3', name: 'JavaScript' },
];


const SingleCompany = ({ company }) => {

  const { isFallback } = useRouter();


  // loading 3rd company dynamically and rest of them statically
  if(isFallback){
    return <h1>Fallback Loading...</h1>
  }

  return (
    <div>
      { company.name }
    </div>
  )
}

export default SingleCompany

export const getStaticPaths = async () => {

  // const paths2 = data.map((d) => {
  //   return {
  //     params: { ['id']: d.id }
  //   }
  // })
  // console.log('paths2')
  // console.log(paths2)

  const paths = data.map(({ no }) => {
    return {
      params: { no }
    };
  });
  // console.log(paths)

  paths.splice(2, 1);

  return {
    paths,
    fallback: true, // every page static ? false
  }
}

// runs once per company, in PROD
export const getStaticProps = ({ params: { no } }) => {
  const company = data.find(company => company.no === no);
  return { props: { company } }
}