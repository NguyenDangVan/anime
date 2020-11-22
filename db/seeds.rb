# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Movie.create title: "Noblesse",
						 original_title: "노블레스",
						 movie_type: 0,
						 content: "Raizel thức tỉnh sau 820 năm ngủ yên. Nhằm để bảo vệ Raizel, Frankenstein đã cho anh nhập học tại một ngôi trường cao trung để Raizel có thể học cuộc sống đơn giản và bình thường của thế giới loài người qua bạn bè. Tuy nhiên, một tổ chức bí mật âm mưu thống trị thế giới mang tên Union đã cử những con người biến đổi nhắm vào Raizel khiến anh phải dùng lấy sức mạnh để bảo vệ lấy mọi người xung quanh.",
						 status: 1,
						 aried: "2020-10-03" 

Movie.create title: "Mahouka Koukou no Rettousei: Raihousha-hen [SS2]",
						 original_title: "Visitor Arc | 魔法科高校の劣等生 来訪者編 | Mahouka Koukou no Rettousei 2",
						 movie_type: 0,
						 content: "Câu chuyện lấy bối cảnh trong một thế giới mà phép thuật không phải là một câu truyện cổ tích mà chúng đã tồn tại gần một trăm năm. Vào mùa xuân, trường Trung Học Pháp Thuật chào đón học sinh mới và tên của những học sinh xuất sắc với điểm số cao được gọi là Bloom và những học sinh thay thế Bloom là Weed. Anh em nhà Tatsuya và Miyuki Shiba được xếp hạng lần lượt là Weed và Bloom. Miyuki được danh hiệu Bloom vì điểm số ấn tượng của cô, trong khi Tatsuya được gọi là Weed vì điểm thực hành phép thuật kém cỏi của cậu. Tatsuya, người đàn ông trẻ tuổi có ý chí nhìn xa trông rộng và Miyuki, cô gái có tình cảm dành cho anh trai vượt xa cả tình anh em. Từ khi 2 người bước chân vào cánh cổng của ngôi trường tài năng này, sự yên bình vốn có của ngôi trường bắt đầu bị rơi vào hỗn loạn…",
						 status: 1,
						 aried: "2020-10-03"

User.create name: "Vannd",
						email: "dinvvan@gmail.com",
						password: 123456,
						role: 0

User.create name: "Chucml",
						email: "chucml@gmail.com",
						password: 123456,
						role: 0

Genre.create name: "Fantasy",
						 description: ""

MovieGenre.create movie_id: 1,
									genre_id: 1

Subtitle.create language: "English"
MovieSubtitle.create movie_id: 1,
											subtitle_id: 1