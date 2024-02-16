import { Card, CardContent, Stack, Typography } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

import { ErrorCardProps } from './types';

const ErrorCard = ({ message }: ErrorCardProps) => {
  return (
    <Card sx={{ width: '20%', minHeight: '20%' }}>
      <CardContent>
        <Stack flexDirection="row" alignItems="center" justifyContent="center">
          <ErrorIcon color="error" />
          <Typography variant="h6">Oops!</Typography>
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {message}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ErrorCard;
