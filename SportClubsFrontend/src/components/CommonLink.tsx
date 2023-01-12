import { Typography, Link } from '@mui/material';

type Approps = {
  url: string;
};

const sxLinkTypography = {
  fontWeight: 600,
  fontSize: 14,
  letterSpacing: 1.25,
  mb: 1,
};

export default function CommonLink({ url }: Approps) {
  return (
    <Link underline="none" href={url} color="#4741DE">
      <Typography variant="body2" sx={sxLinkTypography}>
        sign in
      </Typography>
    </Link>
  );
}
