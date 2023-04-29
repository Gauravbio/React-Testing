import { SkillsProps } from "./skills.type";

export const Skill = (props: SkillsProps) => {
    const {skills}=props;
  return (
    <>
        <ul>
            {skills.map((skill)=> {
                return <li key={skill}>{skill}</li>
            })}
        </ul>
    </>
  )
}
