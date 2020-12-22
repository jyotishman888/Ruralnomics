import React from 'react'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'

export default function Blog() {
    return (
        <div>
            <Navbar/>
            <section className="xs-banner-inner-section parallax-window" style={{backgroundImage:"url('assets/images/backgrounds/blog_details_header_bg.jpg')"}}>
                <div className="xs-black-overlay"></div>
                <div className="container">
                    <div className="color-white xs-inner-banner-content">
                        <h2 className="text-white">Blogs</h2>
                        {/* <p>Give a helping hand for poor people</p> */}
                        
                    </div>
                </div>
            </section>


            <main className="xs-main">
                <div className="xs-content-section-padding xs-blog-single">
                <div style={{justifyContent:'center', marginLeft:'20%'}}>
                    <div className="row">
                        <div className="col-md-12 col-lg-8" >
                            <article  className="post format-standard hentry xs-blog-post-details">
                                {/* <div className="post-media post-image">
                                    <img src="assets/images/blog/news-1.jpg" className="img-responsive" alt=""/>
                                </div> */}<br/><br/>

                                <div className="post-body xs-border xs-padding-40" style={{borderRadius:"15px", boxShadow:"13px 10px 5px #aaaaaa"}}>
                                    <div className="entry-header">
                                        <div className="post-meta row">
                                            <div className="col-md-3 xs-padding-0" >
                                                <div>
                                                <img src="assets/image/1.jpg" style={{height:"110px",width:"130px", borderRadius:10}} className="img-responsive" alt=""/>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <h5>From :</h5>
                                        <h2 className="entry-title xs-post-entry-title">
                                            <a >
                                            Ms. Lotika Shridhar
                                            <br/>
                                            </a>
                                        </h2>
                                        <h5>    </h5>
                                    </div>
                                    
                                    <div className="entry-content">
                                        <h3> Most Famous Festivals in North East India.</h3>
                                        <h5>
                                        <br/> <br/>
                                        Festivals in North East India flaunt its rich culture. Most of the festivals here are either related to agriculture, Buddhism or beginning of a New Year.
                                         There are many festivals that extend over a number of days and include folk/tribal dance and music. These festivals also present a wonderful opportunity for the people belonging to different tribes to bond. The sumptuouSaga Dawa is one of the major Buddhist festivals in Sikkim and is celebrated in the Tibetan lunar month. The full moon day that falls in the middle of the lunar month is known as Saga Dawa and it is considered as an auspicious day by the Buddhists. Saga Dawa is called the ‘Month of Merits’ and is celebrated between May and June. The festival commemorates the birth, enlightment and death of the Buddha. On the occasion of Saga Dawa in Sikkim, people gather at the monasteries and offer water, incense sticks and dhog. Also, many participate in the circumambulation of the Gompas, where they chant mantras, carry the religious text and turn the prayer wheels.s delicacies, interesting costumes, soulful music, warm hospitality and the lively ambiance give one enough reasons to be a part of the festivity in the North East.
                                        <br />
                                        <br/>
                                        Losar, Arunachal Pradesh
                                        <br/>
                                        <br/>
                                        Losar is a major festival in Arunachal Pradesh as it marks the Tibetan New Year. Tribes like Monpa, Sherdukpens, Memba, Khamba and Nah following the Mahayana sect of Buddhism celebrate this festival with all pomp. This three-day festival begins on February 11 each year. On the first day of the festival, the priests make offering to the highest priest called the Dharmapala or Palden Lhamo, whereas the masses visit friends and family and wish them Tashi Delek  (best wishes). On the second day of the festival, which is also called Gyalpo Losar, national leaders and kings are honoured.
                                         On the third and final day of the festival known as Choe-Kyong Losar, people make offerings  to Dharmapala and tie prayer flags on rooftops and across the locality.
                                         <br/>
                                         <br/>
                                         Saga Dawa, Sikkim 
                                         <br/>
                                         <br/>
                                         Saga Dawa is one of the major Buddhist festivals in Sikkim and is celebrated in the Tibetan lunar month. TDree Festival, Arunachal Pradeshhe full moon day that falls in the middle of the lunar month is known as Saga Dawa and it is considered as an auspicious day by the Buddhists. Saga Dawa is called the ‘Month of Merits’ and is celebrated between May and June. The festival commemorates the birth, enlightment and death of the Buddha. On the occasion of Saga Dawa in Sikkim, people gather at the monasteries and offer water, incense sticks and dhog. Also, many participate in the circumambulation of the Gompas, where they chant mantras, carry the religious text and turn the prayer wheels.
                                         <br/>
                                         <br/>
                                         Ambubachi Mela, Assam
                                         <br/>
                                         <br/>
                                         Ambubachi Mela is held in Guwahati, Assam. The festival is celebrated during the month of June in the Kamakhya Temple. Thousands of devotees from all over India and abroad throng the temple; thus this mela can rightly be called the ‘Mahakumbh of the East’. It is believed that during this time of each year Goddess Kamakhya goes through her annual menstrual cycle. The temple remains closed for three days and is considered unclean, however the devotees throng the temple’s premises to seek Goddess’ blessing even though the doors are closed. It is also during this time of the year when the Tantrik Cult is seen performing various unusual rites. After three days the temple re-opens and the devotees are allowed to offer prayer to the deity.
                                         <br/>
                                         <br/>
                                         Dree Festival, Arunachal Pradesh
                                         <br/>
                                         <br/>
                                         Dree is the festival of the Apatani Tribe, it has gained in popularity amongst other tribes in Arunachal Pradesh as well. The festival takes place on July 5 each year; however celebrations associated with the festival begin from July 4 itself. Dree is the biggest festival of the Ziro Valley and is celebrated to ensure a good harvest. During the festival, people offer prayers to four Gods namely, Tamu, Harniang, Metii, and Danyi. Traditional dance is performed and as a symbol of good harvest cucumber is distributed to all. Women brew wine and people also savour various delicacies and rice/millet beer. 
                                         <br/>
                                         <br/>
                                         Moatsu Mong, Nagaland
                                         <br/>
                                         <br/>
                                         Held in Mokokchung district, Moatsu Mong festival begins with the cleaning of wells and the brewing of beer. During the festival people savour the taste of local delicacies and enjoy cultural programs. Where men perform traditional warrior dance, women sing songs that praise Aovillages. Moatsu Mong is a very colourful festival and is also the symbol of the rich Naga culture. This festival of the Ao tribe in Nagaland marks the completion of the sowing season. It is a three-day festival that is celebrated from May 1 to 3 
                                         <br/>
                                         <br/>
                                         Anthurium, Mizoram
                                         <br/>
                                         <br/>
                                         Named after a famous flower, Anthurium is a major festival in Mizoram. Anthurium is celebrated with an objective of promoting tourism and it is held in the month of September each year. A small village called Reiek (about 70kms from capital city Aizawl) is the venue for this fest. Folk dance, music and cuisine are the highlight of this festival.
                                         <br/>
                                         <br/>
                                         Lui-ngai-ni, Manipur
                                         <br/>
                                         <br/>
                                         Lui-Ngai-Ni is celebrated by almost all the tribes of the Nagas; thus it is celebrated not only in Nagaland but in Manipur (Naga inhabited areas) as well. The festival takes place on February 15 each year and marks the seedsowing season. Known for strengthening the bond between the Naga tribes, Lui-Ngai-Ni is celebrated with much pomp. During the festival, traditional dances are performed; different delicacies are prepared rituals of lighting fire and blessing the seeds that will be sown are also performed. Lui-Ngai-Ni festival gives out the message of peace and harmony.
                                         <br/>
                                         <br/>
                                         Bihu Festival, Assam
                                         <br/>
                                         <br/>
                                         Celebrated to welcome the Assamese New Year, Bohag Bihu is one of the most important festival of Assam. The Assamese celebrate Bihu thrice in a year namely, Bohag or Rongali Bihu, Kaati or Kongali Bihu and Maagh or Bhogali Bihu. The Bohag Bihu calls for huge celebration beginning from April 14 each year. Although the festival is observed for 7 days, the celebration extends for about a month. The first day of Bohag Bihu is called Goru Bihu, in which cow and bulls are bathed and fed. The main festival is observed on the second day; people greet each other and present their relatives with Gamosa (hand-woven cotton towels). On this day, young Assamese men and women form groups and perform Bihu Dance. Assamese delicacies are prepared out of which Pitha (dish made of rice powder, wheat flour, coconut, sesame and jaggery) is the specialty. Stages are set in different parts of the state, where Bihu Dance is performed on a regular basis for a month.
                                         <br/>
                                         <br/>
                                         Hornbill Festival, Kohima Nagaland 
                                         <br/>
                                         <br/>
                                         Named after a bird, Hornbill Festival is a major festival in Nagaland. Like many festivals in the state, Hornbill festival is also related to agriculture. It is a 7 to 10 days festival that begins with immense zeal from December 1 every year. Held in Kisama Heritage Village, this festival is attended by all the major tribes in Nagaland. Hornbill is a good time to witness the cultural vividness; it also gives the opportunity to bond with different communities. The warrior log drums, colorful headgear, and soulful war cry, exquisite costumes are the highlights of the festival. The Kohima Night Bazaar and contests like pork eating and King Chilly add tingly flavour to the festive mood.
                                         <br/>
                                         <br/>
                                         Losoong, Sikkim
                                         <br/>
                                         <br/>
                                         Losoong is the Sikkimese New Year and is celebrated each year in the month of December. It is also that time of the year when the farmers celebrate their harvest. Although Losoong Festival is a traditional celebration of the Bhutia tribe, the Lepchas also celebrate it with equal vigour and zeal. Dances are performed (Cham Dance and Black Hat Dance) at the monasteries and the people drink the locally brewed wine called Chaang. Archery competition is also organized to further enhance the festival spirit.
                                         <br/>
                                         <br/>
                                         Nongkrem Dance Festival, Meghalaya
                                         <br/>
                                         <br/>
                                         Nongkrem Dance Festival is a way of celebrating the harvest. The festival is celebrated in the month of November each year by the Khasi Tribe, who sacrifices goats as a thanksgiving offering to Goddess Ka Blei Synshar. It is a five day festival in which young men and women dressed in interesting traditional costume perform tribal dance. Nongkrem Dance Festival is held in Smit, which is about 15kms from the famed city of Shillong.
                                         <br/>
                                         <br/>
                                         Kharchi is a popular festival in Tripura. The Puja (worship) was once performed only by the royal households; however with changing times, Kharchi became common to all the houses in Tripura. It is a 10-day long festival that is marked by animal sacrifice and worshipping 14 gods as instructed by Lord Shiva. The festival takes place in the month of July each year in Old Agartala or Puran Haveli, where there is a temple that houses 14 deities. Thousands of people throng Tripura during the festival and enjoy cultural programmes and fairs.
                                         <br/>
                                         <br/>
                                         Chapchar Kut, Mizoram
                                         <br/>
                                         <br/>
                                         Chapar Kut is an agriculture festival in Mizoram. Celebrated in the month of March every year, Chapar Kut marks the time for planting in the state. The highlight of this festival is the bamboo dance called Cheraw. Apart from this special dance, different style of dances (Khuallam, Chheihlam, Chai and Sarlamkai) are also performed during the festival, traditional songs are sung amidst the cymbal clashes, beats of the drums and sound of the gongs. Handicraft, art and flower show along with food festival and music competitions are organized during the festival. Chapchar Kut is celebrated in Mizoram, Lunglei and Saiha.
                                         <br/>
                                         <br/>
                                         Wangala Festival, Meghalaya
                                         <br/>
                                         <br/>
                                         Wangala is a winter festival in Meghalaya that is mainly celebrated by the Garo tribe. It is held in the second week of November each year in Asanang village near Tura in the Garo Hills and is considered to be a post-harvest celebration. The festival is celebrated in the honor of Misi Saljong, who is considered to be a generous giver. The village chief called Nokma performs rituals a day before the festival begins during which freshly brewed rich beer, cooked rice and vegetables are offered to Misi Saljong. Wangala Festival is also called ‘100 Drum Wangala Festival’; the main attraction of this celebration is the music. Drums, orchestra and flutes offer a wonderful and mesmerizing ambiance that amplifies the festive mood. The feathered head gear is yet another attraction that is worn by everyone celebrating the festival.
                                         <br/>
                                         <br/>
                                         Kang Chingba, Manipur
                                         <br/>
                                         <br/>
                                         Kang Chingba is the biggest Hindu festival in Manipur. The Kang Chingba festival is celebrated in the month of July each year and is similar to Puri Rath Yatra. It is an 8-day festival, which celebrates the journey of Lord Jagannath, his brother Balabhadra, and sister Subhadra. Thousands of devotees throng Imphal during the festival and help pull the massive chariots that carry the deities. Large feasts are organized and people dance all through the night. The Yatra begins from Sri Sri Govindajee Temple in Imphal and the car in which Lord Jagannath is carried is called ‘Kang’.


                                         </h5>
                                        
                                       
                                       
                                        {/* <h3 className="entry-sub-title">Farm-to-table selfies labore leggings:</h3> */}

                                    </div>
                                </div>
                            </article>

                            <article className="post format-standard hentry xs-blog-post-details">
                                {/* <div className="post-media post-image">
                                    <img src="assets/images/blog/news-1.jpg" className="img-responsive" alt=""/>
                                </div> */}<br/><br/>

                                <div className="post-body xs-border xs-padding-40" style={{borderRadius:"15px", boxShadow:"13px 10px 5px #aaaaaa"}}>
                                    <div className="entry-header">
                                        <div className="post-meta row">
                                            <div className="col-md-3 xs-padding-0" >
                                                <div>
                                                <img src="assets/image/2.jpg" style={{height:"130px",width:"130px", borderRadius:10}} className="img-responsive" alt=""/>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <h5>From :</h5>
                                        <h2 className="entry-title xs-post-entry-title">
                                            <a >
                                            Mr. Siddhart Das
                                            <br/>
                                            </a>
                                        </h2>
                                        
                                    </div>
                                    
                                    <div className="entry-content">
                                        <h3> What is Agro-Tech Economy</h3>
                                        <h5>
                                        Agricultural technology or agrotechnology is the use of technology in agriculture, horticulture, and aquaculture with the aim of improving yield, efficiency, and profitability. Agricultural technology can be products, services or applications derived from agriculture that improve various input/output processes.
                                            <br/> <br/>
                                            <h4>History</h4><br/>
                                            While we are involved in combating several issues, child rights, education and Sustainable Development Goals is our primary objective. Here at El Jeffa, we recognize and intend to continue in comprehending the numerous hardships of children living in less privileged environments. It is this compassion that motivates us to strive and work towards child rights. As the Director of El Jeffa Foundation, I am of the opinion that Education and the creative young minds of our nation combined can drastically change the spectrum of social work in India in the time to come. 
                                        <br/><br/>
                                        The Industrial Revolution, also known as the First Industrial Revolution, was the transition to new manufacturing processes in Europe and the United States, in the period from about 1760 to sometime between 1820 and 1840. This transition included going from hand production methods to machines, new chemical manufacturing and iron production processes, the increasing use of steam power and water power, the development of machine tools and the rise of the mechanized factory system. The Industrial Revolution also led to an   unprecedented rise in the rate of population growth.
                                        <br/>
                                        <br/>
                                        <h4>Types of agricultural technology</h4>
                                        <br/>
                                        
                                        -> Technologies and applications in agricultural technology include:
                                        <br/> <br/>
                                       ->  Satellite photography and sensors
                                        <br/> <br/>
                                      ->  IoT-based sensor networks
                                        <br/> <br/>
                                      ->  Phase tracking
                                        <br/> <br/>
                                     ->  Weather forecasts
                                        <br/> <br/>
                                      ->  Automated irrigation
                                        <br/> <br/>
                                     ->  Light and heat control
                                        <br/> <br/>
                                     ->   Intelligent software analysis for pest and disease prediction, soil management and other involved analytical tasks
                                        <br/> <br/>
                                     ->   Biotech
                                        <br/> <br/>
                                        <h4>Practical use-case of technology in agribusiness</h4>
                                        <br/> <br/>
                                        Agriculture has been wrongly perceived in the past as a "dirty job" for the old people in rural communities but with the renaissance Technology brought to Agriculture, young people now see it as a potential sector to explore.
                                        <br/> <br/>
                                       <h3> a) Mobile application for agriculture -</h3>  Nigeria's digital agriculture platform which focused on connecting farm sponsors with real farmers in order to increase food production while promoting youth participation in agriculture.
                                        
                                         </h5>
                                        
                                        {/* <h3 className="entry-sub-title">Farm-to-table selfies labore leggings:</h3> */}

                                    </div>
                                </div>
                            </article>

                            




                          

                        </div>
                    </div>
                </div>
            </div>	

            </main>
            <Footer/>
        </div>
    )
}
