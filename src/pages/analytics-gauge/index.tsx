import { NextPage } from "next";
import Head from "next/head";
import { ChartGaugePage } from "@modules/ChartGaugePage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Analytics Dashboard</title>
      </Head>
      <ChartGaugePage />
    </>
  )
}

export default Home;