import { fetchAnimeById } from '@/actions';
import Link from 'next/link';
import Image from 'next/image';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

type PropsType = {
  params: {
    id: string;
  };
};

const Anime = async ({ params: { id } }: PropsType) => {
  const data = await fetchAnimeById(id);

  return (
    <>
      <div className="p-6 bg-natural-900 text-background">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Cover</TableHead>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead className="w-[100px]">Kind</TableHead>
              <TableHead className="w-[100px]">Score</TableHead>
              <TableHead className="w-[100px]">Status</TableHead>
              <TableHead className="w-[100px]">Episodes</TableHead>
              <TableHead className="w-[100px]">Aired on</TableHead>
              <TableHead className="w-[100px]">Released On</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow key={data.id}>
              <TableCell className="text-right py-8">
                <Image
                  src={`https://shikimori.one${data.image.original}`}
                  alt="poster image"
                  width={80}
                  height={100}
                />
              </TableCell>
              <TableCell className="font-medium">{data.id}</TableCell>
              <TableCell className="font-medium">{data.name}</TableCell>
              <TableCell className="font-medium">{data.kind}</TableCell>
              <TableCell className="font-medium">{data.score}</TableCell>
              <TableCell className="font-medium">{data.status}</TableCell>
              <TableCell className="font-medium">{data.episodes}</TableCell>
              <TableCell className="font-medium">{data.aired_on}</TableCell>
              <TableCell className="font-medium">{data.released_on}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="p-4 text-2xl font-semibold">
          <Link href="/">Back</Link>
        </div>
      </div>
    </>
  );
};

export default Anime;
