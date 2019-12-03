require 'faker'

## UserAccounts and UserProfiles seeder
(1..10).each do |i|
    name = Faker::Name.name
    puts name
    email = "test#{i}@gmail.com"
    user_acc = UserAccount.create(name: name, email: email, password: '123456')
    user_acc.create_user_profile(name: name, 
                                 email: email, 
                                 avatar_url: 'https://www.sideshow.com/storage/product-images/903429/thanos_marvel_feature.jpg')
end

## Posts seeder
100.times do
    user_id = rand(1..UserProfile.all.count)
    puts user_id
    user = UserProfile.find(user_id)
    user.posts.create(
        content: Faker::Food.dish,
        image_url: 'https://dauhomemade.vn/apps/uploads/2018/09/BunDauDayDu.jpg',
        location_tag: "Đại Học Bách Khoa Hà Nội",
    )
end

## Comments seeder
100.times do
    user_id = rand(1..UserProfile.all.count)
    puts user_id
    post_id = rand(1..Post.all.count)
    post = Post.find(post_id)
    post.comments.create(
        user_profile_id: user_id,
        content: Faker::Food.description
    )
end

## Relationship seeder
100.times do 
    user_id = rand(1..UserProfile.all.count)
    puts user_id
    followed_id = rand(1..UserProfile.all.count)
    user = UserProfile.find(user_id)
    if user.following.include?(UserProfile.find(followed_id))
        user.active_relationships.create(followed_id: followed_id)
    end
end