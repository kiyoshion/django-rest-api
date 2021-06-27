from django.contrib import admin
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView, RedirectView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    # path('api-auth/', include('rest_framework.urls')),
    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.jwt')),
    # path('api/token/', TokenObtainPairView.as_view(), name='token'),
    # path('api/token/refresh/', TokenRefreshView.as_view(), name='refresh_token'),
    path('api/item/', include('item.urls')),
    # re_path('', RedirectView.as_view(url='/')),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
  import debug_toolbar

  urlpatterns = [path('__debug__/', include(debug_toolbar.urls))] + urlpatterns
