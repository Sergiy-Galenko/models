from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
    TokenBlacklistView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('internal/users/', include('users.urls')),
    path('internal/catalog/', include('catalog.urls')),
    path('internal/content/', include('content.urls')),
    path('internal/forms/', include('forms.urls')),
    path('internal/auth/token/', TokenObtainPairView.as_view(), name='token_obtain'),
    path('internal/auth/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('internal/auth/token/blacklist/', TokenBlacklistView.as_view(), name='token_blacklist'),
]
