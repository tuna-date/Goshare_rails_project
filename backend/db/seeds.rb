require 'faker'

avatar_urls = ['https://i.pinimg.com/236x/24/d1/9c/24d19c2cad0293275f08af4918182253.jpg',
               'https://i.pinimg.com/236x/4e/86/27/4e8627c8762a0f5a6119698769f6b5b4.jpg',
               'https://i.pinimg.com/236x/82/13/10/8213104a9285488263794440927619fe.jpg',
               'https://i.pinimg.com/236x/18/04/bf/1804bfc38fb43e90ed3dbf71b492851f.jpg',
               'https://i.pinimg.com/236x/fe/a2/8a/fea28aa9e039c2ab8e0ab0afd73f8b4a.jpg',
               'https://i.pinimg.com/236x/ab/7c/da/ab7cdab78af64b40c5ad7f924c9b6768.jpg',
               'https://i.pinimg.com/236x/88/bd/d8/88bdd871c64a6d499c41d5678429e414.jpg',
               'https://i.pinimg.com/236x/a0/04/17/a004176639b1ca80c904c83dfe926507.jpg',
               'https://i.pinimg.com/236x/21/56/e8/2156e8dca2da7c18ccf6f1274239e6b4.jpg',
               'https://i.pinimg.com/236x/d6/b3/78/d6b37892ccd204e4ed0b33993d7e6683.jpg',
               'https://i.pinimg.com/236x/65/ca/72/65ca7219dc3bf31323a131b3182ed657.jpg',
               'https://i.pinimg.com/236x/f5/3a/91/f53a91c80a34b192b7af446d78b92f68.jpg',
               'https://i.pinimg.com/236x/39/31/22/393122078cbd3710b0cadd01712b59fc.jpg',
               'https://i.pinimg.com/236x/d1/e6/04/d1e604d6f88a3e07f9ceb6bcf6cf7cbe.jpg',
               'https://i.pinimg.com/236x/2d/1e/f1/2d1ef1ef252e6dd29e6ac4edc9eb47a9.jpg',
               'https://i.pinimg.com/236x/e1/c0/d6/e1c0d6f7a17506058f7c245b25f8a904.jpg',
               'https://i.pinimg.com/236x/bd/95/88/bd958862219d2f4cf4279ec0e68a0ead.jpg',
               'https://i.pinimg.com/236x/d0/83/be/d083be197f7db1a9866349ac2982db60.jpg',
               'https://i.pinimg.com/236x/73/8c/f3/738cf38e3fb5e3c2420082ce400cd013.jpg',
               'https://i.pinimg.com/236x/5a/95/a3/5a95a3731d531b7f2276627a5837cd79.jpg',
               'https://i.pinimg.com/236x/87/ba/47/87ba4771b17791c624013364810a33eb.jpg',
               'https://i.pinimg.com/236x/3f/a9/3f/3fa93fa4ce9557c3450e3f4bdfb65e0d.jpg',
               'https://i.pinimg.com/236x/1b/b6/df/1bb6dfcf488859a615b62210a0df2038.jpg',
               'https://i.pinimg.com/236x/1f/83/c5/1f83c5a5374661424e5f1e4e4ada0767.jpg',
               'https://i.pinimg.com/236x/f0/56/e7/f056e7637ec0a3761d699d617cdeeec8.jpg',
               'https://i.pinimg.com/236x/86/0d/37/860d37df9098a0ec85f2bacbe1d5794f.jpg',
               'https://i.pinimg.com/236x/75/65/d2/7565d2fec6f57922e4a0528bace0e04e.jpg',
               'https://i.pinimg.com/236x/79/f8/a7/79f8a74e4ff1156bfe198e0ce54584da.jpg',
               'https://i.pinimg.com/236x/c8/41/ad/c841ad5778798138b33f4453d7c3dfd0.jpg',
               'https://i.pinimg.com/236x/cb/10/c9/cb10c990418b360325891c78811040b3.jpg',
               'https://i.pinimg.com/236x/c8/29/41/c829418e1ac3c99aa042452f74b7d3e4.jpg',
               'https://i.pinimg.com/236x/59/82/9a/59829a847d215c1492dd34b344505a17.jpg',
               'https://i.pinimg.com/236x/b5/a2/3a/b5a23ab7a8027cf2d034768df804a8d4.jpg',
               'https://i.pinimg.com/236x/05/a4/df/05a4dfbd38f466f97c63b01064ee8c0f.jpg']

image_urls = ['https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/54455/cook-food-kitchen-eat-54455.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/2732666/pexels-photo-2732666.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/929137/pexels-photo-929137.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/533325/pexels-photo-533325.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/842142/pexels-photo-842142.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/1907229/pexels-photo-1907229.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/1872895/pexels-photo-1872895.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/2591594/pexels-photo-2591594.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/2133989/pexels-photo-2133989.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/2133989/pexels-photo-2133989.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/2456435/pexels-photo-2456435.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/1988624/pexels-photo-1988624.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/806361/pexels-photo-806361.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/718739/pexels-photo-718739.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/2732666/pexels-photo-2732666.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/792027/pexels-photo-792027.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/792027/pexels-photo-792027.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/1123253/pexels-photo-1123253.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/2825225/pexels-photo-2825225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              'https://images.pexels.com/photos/674578/pexels-photo-674578.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/751798/pexels-photo-751798.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/2103730/pexels-photo-2103730.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
              'https://images.pexels.com/photos/2689421/pexels-photo-2689421.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
            ]

## UserAccounts and UserProfiles seeder
(1..20).each do |i|
    name = Faker::Name.name
    puts ("users: #{i}/20")
    email = "test#{i}@gmail.com"
    user_acc = UserAccount.create(name: name, email: email, password: '123456')
    user_acc.create_user_profile(name: name, 
                                 email: email, 
                                 avatar_url: avatar_urls.sample)
end

## Posts seeder
i = 0
200.times do
    i += 1
    user_id = rand(1..UserProfile.all.count)
    puts ("posts: #{i}/200")
    user = UserProfile.find(user_id)
    user.posts.create(
        content: Faker::Food.dish,
        image_url: image_urls.sample,
        location_tag: "Đại Học Bách Khoa Hà Nội"
    )
end

## Comments seeder
i = 0
500.times do
    i += 1
    user_id = rand(1..UserProfile.all.count)
    puts ("comments: #{i}/500")
    post_id = rand(1..Post.all.count)
    post = Post.find(post_id)
    post.comments.create(
        user_profile_id: user_id,
        content: Faker::Food.description
    )
end

## Relationship seeder
i = 0
200.times do 
    i += 1
    user_id = rand(1..UserProfile.all.count)
    puts ("relationships: #{i}/200")
    followed_id = rand(1..UserProfile.all.count)
    user = UserProfile.find(user_id)
    if user.following.include?(UserProfile.find(followed_id))
        user.active_relationships.create(followed_id: followed_id)
    end
end