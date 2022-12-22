import { Box, Stack, Theme, useMediaQuery } from '@mui/material';
import { faker } from '@faker-js/faker';
import { times } from 'lodash';

export default function FlexBoxLayouts() {
  const boxes = times(10);
  const mdBP = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <Box>
      <Stack
        direction="row"
        columnGap={2}
        rowGap={1}
        flexWrap="wrap"
        sx={{ p: 2 }}
      >
        {boxes.map((v) => (
          <Box key={v}>{faker.name.fullName()}</Box>
        ))}
      </Stack>
      <Stack direction={!mdBP ? 'column' : 'row'} columnGap={2} sx={{ p: 3 }}>
        <Box
          sx={{
            background: (theme) => theme.palette.primary.main,
            p: 10,
            flex: 1,
            order: {
              sm: 1,
              md: 0,
            },
          }}
        />
        <Box
          sx={{
            background: (theme) => theme.palette.secondary.dark,
            p: 10,
            flexBasis: {
              xs: 1,
              md: 150,
            },
            order: {
              sm: 0,
              md: 1,
            },
          }}
        />
      </Stack>
    </Box>
  );
}

