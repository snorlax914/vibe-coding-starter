import { getHighlights, getProfile } from "@/lib/db";

export default function Home() {
  const profile = getProfile();
  const highlights = getHighlights();

  return (
    <main className="min-h-screen bg-[#ffffff] font-sans text-[#312f27]">
      {/* 자기소개 첫 화면: 회색 무대 위에 이름과 사진을 크게 보여줌 */}
      <section className="bg-[#788086] px-6 pb-16 pt-8 text-white">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex items-center justify-between text-[19px] font-bold">
            <p className="text-[#ffc500]">profile</p>
            <p>{profile.position}</p>
          </div>

          <div className="grid gap-10 py-16 md:grid-cols-[minmax(0,1fr)_360px] md:items-center">
            <div>
              <p className="text-[22px] font-bold leading-[1.3]">
                {profile.tagline}
              </p>
              <h1 className="mt-6 text-[56px] font-extrabold leading-none text-[#ffc500] sm:text-[68px]">
                {profile.name}
              </h1>
            </div>

            {/* 프로필 사진 영역: public/images/ 안의 파일을 화면에 보여줌 */}
            <img
              src={profile.image_path}
              alt={`${profile.name} 프로필 사진`}
              className="h-[360px] w-full rounded-[3px] bg-white object-cover"
            />
          </div>
        </div>
      </section>

      {/* 기본 정보: 바이브 코딩으로 가장 바꾸기 쉬운 데이터 영역 */}
      <section className="bg-[#ffc500] px-6 py-[60px]">
        <div className="mx-auto grid max-w-[1200px] gap-0 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-[3px] bg-white p-6">
            <p className="text-[19px] font-bold text-[#788086]">이름</p>
            <p className="mt-3 text-[29px] font-extrabold leading-tight">
              {profile.name}
            </p>
          </div>
          <div className="rounded-[3px] bg-white p-6">
            <p className="text-[19px] font-bold text-[#788086]">나이</p>
            <p className="mt-3 text-[29px] font-extrabold leading-tight">
              {profile.team}
            </p>
          </div>
          <div className="rounded-[3px] bg-white p-6">
            <p className="text-[19px] font-bold text-[#788086]">취미</p>
            <p className="mt-3 text-[29px] font-extrabold leading-tight">
              {profile.position}
            </p>
          </div>
          <div className="rounded-[3px] bg-white p-6">
            <p className="text-[19px] font-bold text-[#788086]">공개 정보</p>
            <p className="mt-3 text-[29px] font-extrabold leading-tight">
              {profile.uniform_number}
            </p>
          </div>
        </div>
      </section>

      {/* 소개 문장 영역: 학생들이 문구와 스타일을 바꾸는 연습용 섹션 */}
      <section className="bg-white px-6 py-[60px]">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-[40px] font-extrabold leading-tight">자기소개</h2>
          <p className="mt-6 text-[22px] leading-[1.45]">
            {profile.introduction}
          </p>
        </div>
      </section>

      {/* 좋아하는 것 목록: 항목 추가/삭제 실습에 쓰기 좋은 영역 */}
      <section className="bg-[#ffc500] px-6 py-[60px]">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-[40px] font-extrabold leading-tight">특징</h2>
          <div className="mt-8 grid gap-0 sm:grid-cols-3">
            {highlights.map((highlight) => (
              <div
                key={highlight.id}
                className="rounded-[3px] bg-white px-6 py-8 text-center text-[22px] font-bold"
              >
                {highlight.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
