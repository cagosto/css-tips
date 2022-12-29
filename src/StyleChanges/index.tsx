import { Box, Typography, Divider, Theme } from '@mui/material';
import { SxProps } from '@mui/system';

function TitleBlock({ stylesOverrides }: { stylesOverrides: SxProps<Theme> }) {
  return (
    <Box sx={stylesOverrides}>
      <Typography
        component="span"
        className="eyebrow"
        sx={{ color: (theme) => theme.palette.secondary.main }}
      >
        I am an eyebrow!
      </Typography>
      <Typography variant="h2" className="sectionTitle" color="primary.main">
        I am a title!
      </Typography>
    </Box>
  );
}

export default function StyleOverride() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h2">Style Overrides:</Typography>
      <Divider />
      <TitleBlock
        stylesOverrides={{
          mt: 2,
        }}
      />
      <Divider />
      <TitleBlock
        stylesOverrides={{
          mt: 2,
          '.eyebrow': {
            color: (theme) => theme.palette.primary.light,
          },
          '.sectionTitle': {
            color: (theme) => theme.palette.secondary.light,
          },
        }}
      />
      <Divider />
      <TitleBlock
        stylesOverrides={{
          mt: 2,
          'span.MuiTypography-root': {
            color: (theme) => theme.palette.secondary.dark,
          },
          'h1.MuiTypography-root ': {
            color: (theme) => theme.palette.primary.dark,
          },
        }}
      />
    </Box>
  );
}

