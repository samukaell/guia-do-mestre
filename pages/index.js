export default function Home() {
}

export const getServerSideProps = async () => ({
  redirect: {
    destination: '/home',
    permanent: false,
  }
})
