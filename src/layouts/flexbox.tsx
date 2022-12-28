import {
  Box,
  Divider,
  Stack,
  Theme,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { faker } from '@faker-js/faker';
import { times } from 'lodash';

export default function FlexBoxLayouts() {
  const boxes = times(10);
  const mdBP = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h2">Flexbox:</Typography>
      <Divider />
      <Stack
        direction="row"
        columnGap={2}
        rowGap={1}
        flexWrap="wrap"
        sx={{ my: 2 }}
      >
        {boxes.map((v) => (
          <Box key={v}>{faker.name.fullName()}</Box>
        ))}
      </Stack>
      <Stack direction={!mdBP ? 'column' : 'row'} columnGap={2}>
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
            background: (theme) => theme.palette.secondary.light,
            p: 10,
            flexGrow: {
              xs: 0,
              md: 1,
            },
            maxWidth: {
              xs: 'none',
              md: 250,
            },
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

