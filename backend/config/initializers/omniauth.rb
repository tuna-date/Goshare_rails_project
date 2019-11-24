Rails.application.config.middleware.use OmniAuth::Builder do
    provider :facebook, '1347097842155650', '98186572f37477afa2f7389e351f6e9e',
             :scope => 'public_profile, email', :display => 'popup'
  end