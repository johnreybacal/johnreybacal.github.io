<template>
    <div class="row mb-5">
        <div id="selfie-img-container" class="mx-auto">
            <img id="selfie-img" :src="image" class="img-fluid mx-auto d-block rounded-circle" alt="Responsive image">
        </div>
    </div>
    <div class="row mb-5 center-div">
        <p class="center-paragraph">
            My name is Johnrey Bacal and it's a bit weird because there should be a space between John and rey but my birth certificate insists it so I guess a weird normal name is fine.
        </p>
        <p class="center-paragraph">
            I am a software developer and an artist! I work at an IT company for a living and make art to feel alive. I have established a balance between my passion and my profession.
        </p>
        <p class="center-paragraph">
            I am an introvert (everyone already knows about introverts so I won't elaborate it). I like reading books and I can even read while listening to music even though everyone thinks that it is hard. I am not good at communication, I barely even speak. I also play guitar!
        </p>
    </div>
    <div class="row mb-5 educ-work">
        <div class="col-md-12 col-lg-6">
            <h4>Educational Attainment</h4>
            <table class="table-sm table-striped">
                <tbody>
                    <tr v-for="educationalAttainment in educationalAttainments" :key="educationalAttainment">
                        <td>{{ educationalAttainment.school }}</td>
                        <td>{{ educationalAttainment.year }}</td>
                        <td class="text-right">{{ educationalAttainment.course }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col-md-12 col-lg-6">
            <h4>Work Experience</h4>
            <table class="table-sm table-striped">
                <tbody>
                    <tr v-for="workExperience in workExperiences" :key="workExperience">
                        <td><a :href="workExperience.website">{{ workExperience.company }}</a></td>
                        <td>{{ workExperience.position }}</td>
                        <td class="text-right">{{ workExperience.dateStarted }} - {{ workExperience.dateEnded }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            image: require('@/assets/img/selfie.jpg'),
            educationalAttainments: [
                {
                    school: 'Pascual Villanueva Elementary School',
                    year: '2006 - 2011',
                    course: '-'
                },
                {
                    school: 'Pasay City West High School School',
                    year: '2011 - 2015',
                    course: '-'
                },
                {
                    school: 'Technological University of the Philippines',
                    year: '2015 - 2019',
                    course: 'BSIT'
                }
            ],
            workExperiences: [
                {
                    company: 'Paragon ICC',
                    position: 'Software Developer Intern',
                    dateStarted: '2018/06/20',
                    dateEnded: '2018/10/08',
                    website: 'http://www.paragonicc.com/'
                },
                {
                    company: 'Tsukiden Global Solutions, Inc.',
                    position: 'Design Engineer I',
                    dateStarted: '2019/05/14',
                    dateEnded: '2021/02/19',
                    website: 'https://www.tsukiden.com.ph/'
                },
                {
                    company: 'Innov8 Green Technology and Solutions Corp.',
                    position: 'Junior Software Developer',
                    dateStarted: '2021/02/22',
                    dateEnded: 'Present',
                    website: 'http://www.innov8.green/'
                }
            ]
        };
    }
}
</script>