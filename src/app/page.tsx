export default function Home() {
  return (
    <div>
      <div className="flex flex-col p-10">
        <div className="flex justify-center text-center text-5xl">
          오늘의 집회
        </div>
        <div className="flex justify-end align-bottom">2023. 10. 07(토)</div>
      </div>
      <table className="w-full table-auto border-collapse border text-lg">
        <thead>
          <tr>
            <th className="border p-2">집회 일시</th>
            <th className="border p-2">집회 장소</th>
            <th className="border p-2">신고 인원</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">13:00∼16:00</td>
            <td className="border p-2">{`고속터미널역 1出 → 신반포 8차 상가 <반포동>`}</td>
            <td className="border p-2">200</td>
          </tr>
          <tr>
            <td className="border p-2">13:00∼15:00</td>
            <td className="border p-2">{`경찰청 좌측 인도 <미근동>`}</td>
            <td className="border p-2">300</td>
          </tr>
          <tr>
            <td className="border p-2">14:00∼18:00</td>
            <td className="border p-2">{`탑골공원 삼일문 앞 <종로2가>`}</td>
            <td className="border p-2">120</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
