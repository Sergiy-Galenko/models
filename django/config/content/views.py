from rest_framework import generics, permissions
from .models import StaticPage, HomeSection, SeoMeta
from .serializers import StaticPageSerializer, HomeSectionSerializer, SeoMetaSerializer


class StaticPageDetailView(generics.RetrieveAPIView):
    queryset = StaticPage.objects.all()
    serializer_class = StaticPageSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = 'slug'


class HomeSectionListView(generics.ListAPIView):
    queryset = HomeSection.objects.all().order_by('order')
    serializer_class = HomeSectionSerializer
    permission_classes = [permissions.AllowAny]

class SeoMetaDetailView(generics.RetrieveAPIView):
    queryset = SeoMeta.objects.all()
    serializer_class = SeoMetaSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = 'page'