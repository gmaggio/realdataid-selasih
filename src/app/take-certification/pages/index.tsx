import { useBahanBakuData } from '@/app/take-certification/hooks/useBahanBakuData';

interface TakeCertificationProps {
  uuidTransaksi: string;
}

const TakeCertificationPage: React.FC<TakeCertificationProps> = ({
  uuidTransaksi,
}) => {
  const { data, isLoading, error } = useBahanBakuData(uuidTransaksi);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div>sidebar</div>
      <div>
        <div>header</div>
        <div>sub-header</div>
        <div>content</div>
      </div>
    </div>
  );
};

export default TakeCertificationPage;
