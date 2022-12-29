import { Typography, Divider, Theme, useMediaQuery } from '@mui/material';
import { Stack, Box } from '@mui/system';

function Info() {
  return (
    <Box
      sx={{
        p: 4,
        background: (theme) => theme.palette.secondary.light,
        flexBasis: {
          sx: 'auto',
          md: 250,
        },
        flexGrow: {
          sx: 1,
          md: 0,
        },
      }}
    />
  );
}

export default function Reflow() {
  const mdBP = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h2">Reflow:</Typography>
      <Divider />
      <Stack
        gap={2}
        sx={{
          mt: 2,
          flexFlow: {
            sx: 'column',
            md: 'row',
          },
        }}
      >
        {mdBP && <Info />}
        <Box
          sx={{
            p: 4,
            background: (theme) => theme.palette.primary.light,
            flexGrow: 1,
          }}
        />
        {!mdBP && <Info />}
      </Stack>
    </Box>
  );
}

