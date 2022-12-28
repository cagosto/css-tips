import { Box, Typography, Divider } from '@mui/material';

export default function GridLayout() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h2">Grid:</Typography>
      <Divider />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: '1fr 1fr 1fr',
          },
          gridTemplateRows: 'auto',
          gridTemplateAreas: {
            xs: `
              "sidebar"
              "content"
              "header"
            `,
            md: `
              "header header header"
              "content content sidebar"
            `,
          },
          columnGap: 2,
          rowGap: 1,
          mt: 2,
        }}
      >
        <Box
          sx={{
            p: 2,
            background: (theme) => theme.palette.secondary.light,
            gridArea: 'header',
          }}
        >
          Top
        </Box>
        <Box
          sx={{
            p: 2,
            background: (theme) => theme.palette.primary.light,
            gridArea: 'content',
          }}
        >
          Content
        </Box>
        <Box
          sx={{
            p: 2,
            background: (theme) => theme.palette.secondary.main,
            gridArea: 'sidebar',
          }}
        >
          Side
        </Box>
      </Box>
    </Box>
  );
}

