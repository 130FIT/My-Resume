<script lang="ts">
    import { data } from "./data";

    export let lang = "en" as "th" | "en";

    function getDuration(
        start: string,
        end?: string,
        lang: string = "en",
    ): string {
        const options = { year: "numeric" as const, month: "long" as const };
        const formatter = new Intl.DateTimeFormat(lang, options);

        const startDate = new Date(start);
        const startFormatted = formatter.format(startDate);

        if (!end) {
            return `${startFormatted} - ${lang === "th" ? "ปัจจุบัน" : "Present"}`;
        }

        const endDate = new Date(end);
        const endFormatted = formatter.format(endDate);

        const durationInMonths = Math.round(
            (endDate.getTime() - startDate.getTime()) /
                (1000 * 60 * 60 * 24 * 30) +
                1,
        );

        return `${startFormatted} - ${endFormatted} (${durationInMonths} ${lang === "th" ? "เดือน" : "months"})`;
    }
    function getEducationDuration(
        year: string,
        isGraduated: boolean,
        lang: string = "en",
    ): string {
        const options = { year: "numeric" as const };
        const formatter = new Intl.DateTimeFormat(lang, options);

        const startDate = new Date(year);
        const startFormatted = formatter.format(startDate);

        if (!isGraduated) {
            return `${startFormatted} - ${lang === "th" ? "ปัจจุบัน" : "Present"}`;
        }

        return `${startFormatted}`;
    }
</script>

<main class="resume">
    <div id="title">
        <h1>{data.fullName[lang]}</h1>
        <div class="info">
            {#each data.infos as info}
                <div class="i-section">
                    <img src={info.icon} alt={info.alt} class="icon" />
                    <a href={info.link}>{info.text}</a>
                </div>
            {/each}
        </div>
    </div>

    <div id="about-me" class="section">
        <div class="title">
            <h2>about me</h2>
        </div>
        <p>{data.about[lang]}</p>
    </div>

    <div id="experience" class="section">
        <div class="title">
            <h2>experience</h2>
        </div>
        {#each data.experiences as experience, i}
            <div id={`experience-${i + 1}`}>
                <div class="d-flex justify-content-between">
                    <div class="left">
                        <h3>{experience.title[lang]}</h3>
                        {#if experience.link}
                            <a
                                href={experience.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                >{experience.company}</a
                            >
                        {:else}
                            <p>{experience.company}</p>
                        {/if}
                        <p>- {experience.techStack.join(" | ")}</p>
                    </div>
                    <div class="right">
                        <span>
                            {getDuration(
                                experience.startDate,
                                experience.endDate,
                                lang,
                            )}
                        </span>
                    </div>
                </div>
                <div>
                    <ul>
                        {#each experience.details as detail}
                            <li>{detail[lang]}</li>
                        {/each}
                    </ul>
                </div>
            </div>
        {/each}
    </div>
    <div id="project-and-reward" class="section">
        <div class="title">
            <h2>project && reward</h2>
        </div>
        {#each data.prijectAndRewards as project, i}
            <div id={`project-${i + 1}`}>
                {#if project.link}
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        ><h3>{project.title[lang]}</h3></a
                    >
                {:else}
                    <h3>{project.title[lang]}</h3>
                {/if}
                <p>
                    <strong>{project.subtitle[lang]} :</strong>
                    {project.details[lang]}
                </p>
            </div>
        {/each}
    </div>
    <div id="education-and-skills" class="section">
        <div class="title">
            <h2>education & skills</h2>
        </div>
        <div class="row m-0 gap-0 w-100 mw-100">
            <div id="education" class="col p-0">
                {#each data.educations as education, i}
                    <div id={`education-${i + 1}`} class="d-flex flex-column">
                        <h3>{education.title[lang]}</h3>
                        <p>
                            {lang === "th" ? "คณะ" : "Faculty of "}{education
                                .faculty[lang]}
                        </p>
                        <p>
                            {lang === "th" ? "สาขาวิชา" : "Major: "}{education
                                .major[lang]}
                        </p>
                        <p>
                            {education.school[lang]}
                            {getEducationDuration(
                                education.year,
                                education.isGraduated,
                                lang,
                            )} (GPA: {education.gpa})
                        </p>
                    </div>
                {/each}
            </div>
            <div id="skills" class="col p-0">
                {#each data.skills as skill, i}
                    <div id={`skill-${i + 1}`} class="d-flex flex-column">
                        <h3>{skill.title}</h3>
                        <p>{skill.details.join(", ")}</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</main>
