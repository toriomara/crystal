export default function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `На сервере возникла ошибка ${statusCode}`
        : `Ошибка возникла на клиенте`}
    </p>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}