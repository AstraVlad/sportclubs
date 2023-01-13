import { Typography, Link } from '@mui/material';

type Approps = {
  url: string;
  text: string
};

const sxLinkTypography = {
  fontWeight: 600,
  fontSize: 14,
  letterSpacing: 1.25,
  mb: 1,
};

export default function CommonLink({ url, text }: Approps) {
  return (
    <Link underline="none" href={url} color="#4741DE">
      <Typography variant="body2" sx={sxLinkTypography}>
        {text}
      </Typography>
    </Link>
  );
}
