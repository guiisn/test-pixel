import {
  Grid, Group, Radio, Stack, Title,
} from '@mantine/core';

export interface DetailingCardProps {
    selected?: boolean
    installments: number
    installmentAmount: number | string
    totalAmount: number | string
    interestRate: number | string
    cet: number | string
    firstPayment: string
}

export default function DetailingCard({
  selected,
  cet,
  firstPayment,
  installmentAmount,
  installments,
  interestRate,
  totalAmount,
}: DetailingCardProps): JSX.Element {
  return (
    <Grid
      data-testid="detailing-card"
      w="100%"
      sx={(theme) => ({
        padding: '.5rem 1.5rem',
        borderRadius: '20px',
        border: !selected ? '2px solid transparent' : `2px solid ${theme.colors.violet[4]}`,
        cursor: 'pointer',
        transition: 'all .4s',
        boxShadow: !selected ? '0px 2px 14px 0px rgba(0, 0, 0, 0.15)' : '0px 7px 7px -5px rgba(112, 13, 255, 0.20)',
        ':hover': {
          border: `2px solid ${theme.colors.violet[4]}`,
          boxShadow: '0px 7px 7px -5px rgba(112, 13, 255, 0.20)',
        },
      })}
    >
      <Grid.Col span={5}>
        <Group align="center" h="100%">
          <Title order={1} weight={800}>
            {installments}
            {' '}
            Parcelas
          </Title>
        </Group>
      </Grid.Col>
      <Grid.Col span={5}>
        <Stack sx={{ gap: '.5rem' }}>
          <Title order={3} weight={800}>
            {installments}
            x de
            {' '}
            {installmentAmount}
          </Title>
          <Stack sx={{ gap: '.1rem' }}>
            <Title order={5} color="gray.4" weight={700}>
              <b>Valor total: </b>
              {totalAmount}
            </Title>
            <Title order={5} color="gray.4" weight={700}>
              <b>Juros ao mês: </b>
              {interestRate}
            </Title>
            <Title order={5} color="gray.4" weight={700}>
              <b>CET (Custo Efetivo Total): </b>
              {cet}
            </Title>
            <Title order={5} color="gray.4" weight={700}>
              <b>Primeiro pagamento: </b>
              {firstPayment}
            </Title>
          </Stack>
        </Stack>
      </Grid.Col>
      <Grid.Col span={2}>
        <Group position="right">
          <Radio size="lg" color="violet.4" checked={Boolean(selected)} />
        </Group>
      </Grid.Col>
    </Grid>
  );
}
