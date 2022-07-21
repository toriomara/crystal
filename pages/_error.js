import { Box, Flex, Heading } from '@chakra-ui/react';

export default function Error({ statusCode }) {
  return (
    <Flex justifyContent='center'>
      <Heading variant='h3'>
        {statusCode
          ? `На сервере возникла ошибка ${statusCode}`
          : `Ошибка возникла на клиенте`}
      </Heading>
    </Flex>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
