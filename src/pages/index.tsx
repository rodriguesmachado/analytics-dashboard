import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

interface Props {
  pageTitle: string
}

const InitialPage: NextPage<Props> = ({ pageTitle }) => {
  return (
    <Head>
      <title>{pageTitle}</title>
    </Head>
  );
}

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    permanent: false,
    destination: '/analytics-gauge'
  }
})

export default InitialPage