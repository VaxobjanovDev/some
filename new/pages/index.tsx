// import type { GetStaticProps } from "next";
import { BaseLayout } from "../src/layout/base-layout";
import { MainComponent } from "../src/modules/main";
import { DataType } from "../src/types/cardType";


function Home (){
  return (
    <BaseLayout>
      <MainComponent />
    </BaseLayout>
  );
};

// export const getStaticProps: GetStaticProps = async (context: any) => {
//   const {req} = context
//
//   let host = req?.headers.host || "localhost:3000"
//
//   const res = await fetch(`http://${host}/api/products`)
//
//   const data = await res.json()
//
//   return {
//     props: {
//       data: data.data,
//     },
//   }
// }
//


export default Home;

