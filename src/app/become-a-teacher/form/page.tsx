// app/become-a-teacher/form/page.tsx
import TeacherFormClient from './TeacherFormClient';

type PageProps = {
  searchParams: {
    submitted?: string;
  };
};

export default function TeacherFormPage({ searchParams }: PageProps) {
  const submitted = searchParams.submitted === '1';

  return <TeacherFormClient submitted={submitted} />;
}
