import { useNavigate } from 'react-router-dom';
import Button from '~/UI/button/Button';

interface Props {
  code: number;
  message: string;
}

export default function Error({ code, message }: Props) {
  const navigate = useNavigate();

  return (
    <div className="window-height flex flex-col justify-center items-center">
      <h1>ERROR</h1>
      <h3>
        {code} | {message}
      </h3>
      <Button classes="mt-md" onClick={() => navigate('/')}>
        Go Back
      </Button>
    </div>
  );
}
