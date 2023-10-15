import Link from "next/link";

export default function Home() {
  const data10_15 = encodeURI(
    '{"paths":[[{"lat":37.5350315,"lng":126.9734515}],[{"lat":37.5704841,"lng":126.9884616}],[{"lat":37.5649611,"lng":126.9764825},{"lat":37.5697599,"lng":126.9836604}]]}'
  );
  return (
    <div>
      <Link
        href={{
          pathname: "/map",
          query: {
            data: data10_15,
          },
        }}
      >
        10/15
      </Link>
    </div>
  );
}
