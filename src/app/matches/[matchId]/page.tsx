export default function Detail({
    params,
  }: {
    params: {
      matchId: string;
    };
  }) {
    return <h1>This is the detail of {params.matchId}</h1>;
  }
  