from rest_framework import generics, permissions
from .models import User
from .serializers import UserSerializer, RegisterSerializer

class RegisterView(generics.CreateAPIView):
    queryset=User.Objects.all()
    serializer_class=RegisterSerializer
    permision_classes=[permissions.AllowAny]

class UserProfileView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class=UserSerializer
    permission_classes=[permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user