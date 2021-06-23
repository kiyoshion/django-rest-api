from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from . import views
from item.views import ItemListAPIView, ItemRetriveAPIView, ItemCreateAPIView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('djoser.urls')),
    path('api/auth/', include('djoser.urls.jwt')),
    path('api/item/', ItemListAPIView.as_view()),
    path('api/item/', ItemCreateAPIView.as_view()),
    path('api/item/<int:pk>', ItemRetriveAPIView.as_view()),
]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
  import debug_toolbar

  urlpatterns = [path('__debug__/', include(debug_toolbar.urls))] + urlpatterns
